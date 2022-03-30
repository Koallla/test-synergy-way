from .models import User, Group
from .serializers import UserSerializer, GroupSerializer
from rest_framework import generics


# from rest_framework import viewsets

class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GroupView(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer