from rest_framework import generics
from .serializers import EmployeeSerializer
from .models import Employee


class EmployeeListCreate(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


employee_list_create = EmployeeListCreate.as_view()


class EmployeeDetailView(generics.RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


employee_detail_view = EmployeeDetailView.as_view()
