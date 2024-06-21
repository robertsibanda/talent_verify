from rest_framework import generics
from company.serializers import CompanySerializer, DepartmentSerializer
from .models import Company, Department


class CompanyListCreateView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


company_list_create = CompanyListCreateView.as_view()


class CompanyDetailView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


company_detail_view = CompanyDetailView.as_view()


class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


department_list_create = DepartmentListCreateView.as_view()


class DepartmentDetailView(generics.RetrieveAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


department_detail_view = DepartmentDetailView.as_view()
