from django.contrib import admin
from django.urls import include, path, re_path
from synergy.views import UserView, GroupView, SingleUserView, SingleGroupView
# from frontend.views import index



urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/users/', UserView.as_view()),
    path('api/users/<int:pk>', SingleUserView.as_view()),

    path('api/groups/', GroupView.as_view()),
    path('api/groups/<int:pk>', SingleGroupView.as_view()),


    # path('users', index),
    # path('users/:id', index),
    # path('groups', index),
    # path('groups/:id', index),


    # path('front/', include('frontend.urls')),
    # url(r'^api/customers/$', views.customers_list),
	# url(r'^api/customers/(?P<pk>[0-9]+)$', views.customers_detail),

    ]