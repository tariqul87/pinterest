# Generated by Django 3.1.1 on 2020-10-01 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='animal',
            old_name='road',
            new_name='sound',
        ),
    ]
