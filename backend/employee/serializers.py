from rest_framework import serializers
from .models import Employee
from .models import EmployeeRole


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class EmployeeRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeRole
        fields = '__all__'
