from rest_framework import generics, permissions
from .serializers import EmployeeSerializer, EmployeeRoleSerializer
from .models import EmployeeRole, Employee


class EmployeeListCreate(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    permission_classes = [permissions.IsAuthenticated]


employee_list_create = EmployeeListCreate.as_view()


class EmployeeDetailView(generics.RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.queryset.get(pk=self.kwargs['pk'])


employee_detail_view = EmployeeDetailView.as_view()


class EmployeeRoleDetailView(generics.RetrieveAPIView):
    queryset = EmployeeRole.objects.all()
    serializer_class = EmployeeRoleSerializer

    permissions_classes = [permissions.IsAuthenticated]


employee_role_detail_view = EmployeeRoleDetailView.as_view()


class EmployeeRoleListCreate(generics.ListCreateAPIView):
    queryset = EmployeeRole.objects.all()
    serializer_class = EmployeeRoleSerializer
    lookup_field = 'employee'

    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(employee=self.kwargs['emp']).order_by('start_date').reverse()


employee_role_list_create = EmployeeRoleListCreate.as_view()
