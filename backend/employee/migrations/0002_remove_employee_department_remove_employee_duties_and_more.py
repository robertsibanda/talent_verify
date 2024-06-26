# Generated by Django 4.2.11 on 2024-06-23 12:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0001_initial'),
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='employee',
            name='department',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='duties',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='end_date',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='role',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='start_date',
        ),
        migrations.CreateModel(
            name='EmployeeRole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=255)),
                ('duties', models.TextField()),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='company.department')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='employee.employee')),
            ],
        ),
    ]
