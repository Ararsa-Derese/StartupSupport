# Generated by Django 5.0.6 on 2024-07-14 07:44

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='connections',
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='field_of_expertise',
            field=models.CharField(default='None', max_length=255),
        ),
        migrations.AddField(
            model_name='useraccount',
            name='role',
            field=models.CharField(default='Entrepreneur', max_length=255),
        ),
    ]
