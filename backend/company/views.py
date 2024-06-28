from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import permission_classes
from company.serializers import CompanySerializer, DepartmentSerializer
from .models import Company, Department


@api_view(['PUT', 'PATCH'])
def company_update_view(request, *args, **kwargs):
    company_data = request.data

    updateData = company_data['body']


    instanace = get_object_or_404(Company, id=updateData['id'])

    company_serializer = CompanySerializer(data=updateData)

    print('company_data : : ', updateData)

    print('Serializer is valid')
    for k, v in updateData.items():
        setattr(instanace, k , v)
        instanace.save(force_update=True)

    return Response({ 'success' : 'updated company'})
    return Response({'error':'did not update successfully'})



class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


company_list_create = CompanyListCreateView.as_view()


class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    permission_classes = [permissions.IsAuthenticated]


company_detail_view = CompanyDetailView.as_view()



class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    permission_classes = [permissions.IsAuthenticated]


department_list_create = DepartmentListCreateView.as_view()


class DepartmentDetailView(generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

    permission_classes = [permissions.IsAuthenticated]


department_detail_view = DepartmentDetailView.as_view()

