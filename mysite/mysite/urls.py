from django.contrib import admin
from django.urls import include, path, re_path
from synergy.views import UserView, GroupView
from frontend.views import index



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', UserView.as_view()),
    path('api/groups/', GroupView.as_view()),
    path('users', index),
    path('groups', index),


    # path('front/', include('frontend.urls')),
    # url(r'^api/customers/$', views.customers_list),
	# url(r'^api/customers/(?P<pk>[0-9]+)$', views.customers_detail),

    ]