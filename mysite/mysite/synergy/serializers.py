from rest_framework.serializers import ModelSerializer
from .models import User, Group


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'created', 'group')



class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'description')