from django.urls import path
from company import views as c_views
from employee import views as e_views

urlpatterns = [
    # employee view
    path('employee/', e_views.employee_list_create),
    path('employee/<int:pk>', e_views.employee_detail_view),

    # company views
    path('company/', c_views.company_list_create),
    path('company/<int:pk>', c_views.company_detail_view),

    # department views
    path('department/', c_views.department_list_create),
    path('department/<int:pk>', c_views.department_detail_view),
]