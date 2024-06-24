from django.db import models
from company.models import Department
from company.models import Company


class Employee(models.Model):
    name = models.CharField(max_length=255)
    employee_id = models.CharField(max_length=100, unique=True, null=True, blank=True)

    @property
    def role(self):
        return EmployeeRole.objects.filter(employee=self.id).order_by('start_date').last().role

    @property
    def department(self):
        employee_role = EmployeeRole.objects.filter(employee=self.id).order_by('end_date').last()
        return Department.objects.get(employeerole=employee_role).name
    

    @property
    def company(self):
        employee_role = EmployeeRole.objects.filter(employee=self.id).order_by('start_date').last()
        department = Department.objects.get(id=employee_role.department.id).id
        return Company.objects.get(department=department).name


class EmployeeRole(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    duties = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    @property
    def get_department(self):
        return Department.objects.get(id=self.department.id).name
    
    @property
    def company(self):
        return Company.objects.get(department=self.department).name
