from django.urls import path
from company import views as c_views
from employee import views as e_views
from . import views as auth_views

urlpatterns = [
    # authentication views
    path('login/', auth_views.login),
    path('signup/', auth_views.signup),

    # employee views
    path('employees/', e_views.employee_list_create),
    path('employee/<int:pk>/', e_views.employee_detail_view),

    # employee role views
    path('employee/<int:emp>/role/', e_views.employee_role_list_create),
    path('employee/<int:emp>/role/<int:id>/', e_views.employee_role_list_create),

    # company views
    path('company/', c_views.company_list_create),
    path('company/<int:pk>', c_views.company_detail_view),

    # department views
    path('department/', c_views.department_list_create),
    path('department/<int:pk>', c_views.department_detail_view),
]
