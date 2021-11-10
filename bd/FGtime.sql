create database FGtime;
use FGtime;

create table rol(
	id int primary key auto_increment,
    nombre_rol varchar(50) not null
);

create table usuario(
	id int primary key auto_increment,
    nombre_usuario varchar(50) not null,
    password_usuario varchar(100) not null,
    nombre varchar(200) not null,
    apellido varchar(200) not null,
    tipo_documento varchar(45) not null,
    numero_documento varchar(100) not null,
    email varchar(200) not null,
    fecha_nacimiento date not null,
    direccion varchar(250) not null,
    id_rol int not null,
    foreign key (id_rol) references rol(id)
);


insert into rol (nombre_rol)
values ('administrador');

insert into rol (nombre_rol)
values ('operario');
