from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
class UserAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name,email,role,field_of_expertise, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        user = self.model(
            email=self.normalize_email(email).lower(),
            first_name=first_name,
            role = role,
            field_of_expertise = field_of_expertise,
            last_name=last_name
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
def create_superuser(self, first_name, last_name,email, password=None):
    user = self.create_user(
        email=email,
        first_name=first_name,
        last_name=last_name,
        password=password
    )
    user.is_staff = True
    user.is_superuser = True
    user.save(using=self._db)
    return user
class UserAccount(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    role = models.CharField(max_length=255, default='Entrepreneur')
    field_of_expertise = models.CharField(max_length=255, default='None')
    connections = models.ManyToManyField('self', symmetrical=False, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    def __str__(self):
        return self.email
class Resource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='resources')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Event(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    date = models.DateTimeField()
    location = models.CharField(max_length=255)
    created_by = models.ForeignKey(UserAccount, on_delete=models.CASCADE, related_name='events')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
