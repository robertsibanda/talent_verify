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
            'email',
            'phone',
            'role',
            'department',
            'company'
        ]


class EmployeeRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeRole
        fields = '__all__'
