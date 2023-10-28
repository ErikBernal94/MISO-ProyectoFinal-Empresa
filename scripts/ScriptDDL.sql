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

-- empresa.empresa definition

-- Drop table

-- DROP TABLE empresa.empresa;

CREATE TABLE empresa.empresa (
	id serial4 NOT NULL,
	id_usuario int4 NOT NULL,
	id_tipo_empresa int4 NULL,
	CONSTRAINT empresa_pk PRIMARY KEY (id)
);


-- empresa.area_negocio_empresa definition

-- Drop table

-- DROP TABLE empresa.area_negocio_empresa;

CREATE TABLE empresa.area_negocio_empresa (
	id serial4 NOT NULL,
	id_area_negocio int4 NOT NULL,
	id_empresa int4 NOT NULL,
	CONSTRAINT area_negocio_empresa_pk PRIMARY KEY (id)
);


-- empresa.ciudad_empresa definition

-- Drop table

-- DROP TABLE empresa.ciudad_empresa;

CREATE TABLE empresa.ciudad_empresa (
	id serial4 NOT NULL,
	id_ciudad int4 NOT NULL,
	id_empresa int4 NOT NULL,
	CONSTRAINT ciudad_empresa_pk PRIMARY KEY (id)
);


-- empresa.empresa foreign keys

ALTER TABLE empresa.empresa ADD CONSTRAINT tipoempresa_fk FOREIGN KEY (id_tipo_empresa) REFERENCES metadata.tipo_empresa(id);
ALTER TABLE empresa.empresa ADD CONSTRAINT usuario_fk FOREIGN KEY (id_usuario) REFERENCES registro.usuarios(id);


-- empresa.area_negocio_empresa foreign keys

ALTER TABLE empresa.area_negocio_empresa ADD CONSTRAINT area_negocio_fk FOREIGN KEY (id_area_negocio) REFERENCES metadata.area_negocio(id);
ALTER TABLE empresa.area_negocio_empresa ADD CONSTRAINT empresa_fk FOREIGN KEY (id_empresa) REFERENCES empresa.empresa(id);


-- empresa.ciudad_empresa foreign keys

ALTER TABLE empresa.ciudad_empresa ADD CONSTRAINT ciudad_empresa_fk FOREIGN KEY (id_ciudad) REFERENCES metadata.ciudad(id);
ALTER TABLE empresa.ciudad_empresa ADD CONSTRAINT empresa_fk FOREIGN KEY (id_empresa) REFERENCES empresa.empresa(id);