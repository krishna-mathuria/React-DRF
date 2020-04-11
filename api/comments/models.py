from django.db import models
from authapp.models import User
# Create your models here.
class Comment:
    user=models.ForeignKey(User, on_delete=models.CASCADE)