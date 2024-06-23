from django.contrib.auth.models import User
from .serializers import UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token


@api_view(['POST'])
def login(request, *args, **kwargs):
    """
    get token through login
    """
    username = request.data['username']
    user = get_object_or_404(User, username=username)
    if user.check_password(request.data['password']):
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    return Response({'error': 'Invalid credentials'})


@api_view(['POST'])
def signup(request, *args, **kwargs):
    """
    create user with only username, password and email
    """
    user_data = {
        'username': request.data['username'],
        'password': request.data['password'],
        'email': request.data['email']
    }

    serializer = UserSerializer(data=user_data)

    if serializer.is_valid(raise_exception=True):
        serializer.save()

        user = get_object_or_404(User, username=user_data['username'])
        user.set_password(serializer.validated_data['password'])
        user.save()

        token = Token.objects.create(user=user)
        return Response({'token': token.key})


