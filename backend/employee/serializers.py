from rest_framework import serializers
from .models import Employee
from .models import EmployeeRole


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = [
            'id',
            'name',
            'employee_id',
            'role',
            'department',
            'company'
        ]


class EmployeeRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeRole
        fields = [
            'get_department',
            'role',
            'duties',
            'start_date',
            'end_date',
            'company'
        ]


