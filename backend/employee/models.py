from django.db import models
from company.models import Department


class Employee(models.Model):
    name = models.CharField(max_length=255)
    employee_id = models.CharField(max_length=100, unique=True, null=True, blank=True)


class EmployeeRole(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    duties = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
