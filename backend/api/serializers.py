from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
from .models import Folder
from .models import UserStat


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "folder", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class FolderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Folder
        fields = ["id", "folder", "author"]
        extra_kwargs = {"author": {"read_only": True}}

class UserStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserStat
        fields = ["id", "level", "exp", "user"]
        extra_kwargs = {"user": {"read_only": True}}