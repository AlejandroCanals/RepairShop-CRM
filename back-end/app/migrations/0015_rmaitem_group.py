# Generated by Django 4.2.6 on 2023-11-17 13:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('app', '0014_rmaitem_assigned_technician_delete_tecnicos'),
    ]

    operations = [
        migrations.AddField(
            model_name='rmaitem',
            name='group',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='rma_items', to='auth.group'),
        ),
    ]
