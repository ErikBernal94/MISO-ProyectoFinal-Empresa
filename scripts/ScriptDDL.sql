-- DROP SCHEMA metadata;

CREATE SCHEMA metadata AUTHORIZATION postgres;

-- metadata.area_negocio definition

-- Drop table

-- DROP TABLE metadata.area_negocio;

CREATE TABLE metadata.area_negocio (
	id serial4,
	descripcion varchar NOT NULL,
	CONSTRAINT areanegocio_pk PRIMARY KEY (id)
);


-- metadata.habilidad_blanda definition

-- Drop table

-- DROP TABLE metadata.habilidad_blanda;

CREATE TABLE metadata.habilidad_blanda (
	id serial4,
	descripcion varchar NOT NULL,
	CONSTRAINT habilidadblanda_pk PRIMARY KEY (id)
);


-- metadata.habilidad_tecnica definition

-- Drop table

-- DROP TABLE metadata.habilidad_tecnica;

CREATE TABLE metadata.habilidad_tecnica (
	id serial4,
	descripcion varchar NOT NULL,
	CONSTRAINT habilidadtecnica_pk PRIMARY KEY (id)
);


-- metadata.idioma definition

-- Drop table

-- DROP TABLE metadata.idioma;

CREATE TABLE metadata.idioma (
	id serial4 NOT NULL,
	idioma varchar NOT NULL,
	CONSTRAINT idioma_pk PRIMARY KEY (id)
);


-- metadata.pais definition

-- Drop table

-- DROP TABLE metadata.pais;

CREATE TABLE metadata.pais (
	id serial4 NOT NULL,
	pais varchar NOT NULL,
	CONSTRAINT pais_pk PRIMARY KEY (id)
);


-- metadata.rol definition

-- Drop table

-- DROP TABLE metadata.rol;

CREATE TABLE metadata.rol (
	id serial4 NOT NULL,
	rol varchar NOT NULL,
	CONSTRAINT rol_pk PRIMARY KEY (id)
);


-- metadata.tipo_empresa definition

-- Drop table

-- DROP TABLE metadata.tipo_empresa;

CREATE TABLE metadata.tipo_empresa (
	id serial4 NOT NULL,
	tipo_empresa varchar NOT NULL,
	CONSTRAINT tipoempresa_pk PRIMARY KEY (id)
);


-- metadata.ciudad definition

-- Drop table

-- DROP TABLE metadata.ciudad;

CREATE TABLE metadata.ciudad (
	id serial4 NOT NULL,
	ciudad varchar NOT NULL,
	id_pais int4 NOT NULL,
	CONSTRAINT ciudad_pk PRIMARY KEY (id),
	CONSTRAINT pais_fk FOREIGN KEY (id_pais) REFERENCES metadata.pais(id)
);



CREATE TABLE empresa.proyecto (
	id serial4 NOT NULL,
	nombre varchar NOT NULL,
	descripcion varchar NULL,
	id_estado int4 NOT NULL,
	CONSTRAINT proyecto_pk PRIMARY KEY (id)
);

CREATE TABLE empresa.proyecto_habilidad_tecnica (
	id serial4 NOT NULL,
	id_habilidad_tecnica int4 NOT NULL,
	id_proyecto int4 NOT NULL,
	CONSTRAINT habilidadtecnicaproyecto_pk PRIMARY KEY (id)
);

CREATE TABLE empresa.proyecto_habilidad_tecnica (
	id serial4 NOT NULL,
	id_habilidad_tecnica int4 NOT NULL,
	id_proyecto int4 NOT NULL,
	CONSTRAINT habilidadtecnicaproyecto_pk PRIMARY KEY (id)
);

CREATE TABLE empresa.proyecto_habilidad_blanda (
	id serial4 NOT NULL,
	id_habilidad_blanda int4 NOT NULL,
	id_proyecto int4 NOT NULL,
	CONSTRAINT habilidadblandaproyecto_pk PRIMARY KEY (id)
);
