from rest_framework import serializers
from .models import Company, Department
from employee.models import Employee, EmployeeRole



class CompanySerializer(serializers.ModelSerializer):
    employee_count = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Company
        fields =[
            'id',
            'name',
            'department_count',
            'employee_count'
        ]

    def get_employee_count(self, obj):
        company_departments = Department.objects.filter(company=obj.id)
        employees = []
        for department in company_departments:
            found = EmployeeRole.objects.filter(department=department).count()
            employees.append(found)
        return sum(employees)
    

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

