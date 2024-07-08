from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
class UserAccountManager(BaseUserManager):
    def create_user(self, first_name, last_name,email, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        user = self.model(
            email=self.normalize_email(email).lower(),
            first_name=first_name,
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
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']
    def __str__(self):
        return self.email

# class Connection(BaseUserManager,models.Model):
#     user_from = models.ForeignKey(user, related_name='connections_from', on_delete=models.CASCADE)
#     user_to = models.ForeignKey(user, related_name='connections_to', on_delete=models.CASCADE)
#     created = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         unique_together = ('user_from', 'user_to')

#     def __str__(self):
#         return f"{self.user_from} -> {self.user_to}"