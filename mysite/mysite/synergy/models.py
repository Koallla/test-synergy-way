from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.CharField(max_length=500, unique=True)

    def __str__(self):
        return self.name


class User(models.Model):
    
    username = models.CharField(max_length=50, unique=True)
    created = models.DateTimeField(auto_now=True)
    group = models.ForeignKey(Group, on_delete=models.PROTECT)


    def __str__(self):
        return f'{self.username} / {self.group} / {self.created}'