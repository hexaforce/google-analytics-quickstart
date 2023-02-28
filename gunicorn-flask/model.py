from sqlalchemy import CHAR, Column, DECIMAL, DateTime, Enum, ForeignKeyConstraint, Index, LargeBinary, String, TIMESTAMP, Table, Text, text
from sqlalchemy.dialects.mysql import INTEGER, MEDIUMINT, MEDIUMTEXT, SET, SMALLINT, TINYINT, VARCHAR, YEAR
from sqlalchemy.orm import declarative_base, relationship
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

Base = declarative_base()
metadata = Base.metadata

class Actor(db.Model):
    __tablename__ = 'actor'

    actor_id = Column(SMALLINT(5), primary_key=True)
    first_name = Column(String(45), nullable=False)
    last_name = Column(String(45), nullable=False, index=True)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    film_actor = relationship('FilmActor', back_populates='actor')


t_actor_info = Table(
    'actor_info', metadata,
    Column('actor_id', SMALLINT(5), server_default=text("'0'")),
    Column('first_name', String(45)),
    Column('last_name', String(45)),
    Column('film_info', MEDIUMTEXT)
)


class Category(db.Model):
    __tablename__ = 'category'

    category_id = Column(TINYINT(3), primary_key=True)
    name = Column(String(25), nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    film_category = relationship('FilmCategory', back_populates='category')


class Country(db.Model):
    __tablename__ = 'country'

    country_id = Column(SMALLINT(5), primary_key=True)
    country = Column(String(50), nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    city = relationship('City', back_populates='country')


t_customer_list = Table(
    'customer_list', metadata,
    Column('ID', SMALLINT(5), server_default=text("'0'")),
    Column('name', String(91)),
    Column('address', String(50)),
    Column('zip code', String(10)),
    Column('phone', String(20)),
    Column('city', String(50)),
    Column('country', String(50)),
    Column('notes', String(6)),
    Column('SID', TINYINT(3))
)


t_film_list = Table(
    'film_list', metadata,
    Column('FID', SMALLINT(5), server_default=text("'0'")),
    Column('title', String(128)),
    Column('description', Text),
    Column('category', String(25)),
    Column('price', DECIMAL(4, 2), server_default=text("'4.99'")),
    Column('length', SMALLINT(5)),
    Column('rating', Enum('G', 'PG', 'PG-13', 'R', 'NC-17'), server_default=text("'G'")),
    Column('actors', MEDIUMTEXT)
)


class FilmText(db.Model):
    __tablename__ = 'film_text'
    __table_args__ = (
        # Index('idx_title_description', 'title', 'description'),
        Index('idx_title_description', 'title'),
    )

    film_id = Column(SMALLINT(6), primary_key=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)


class Language(db.Model):
    __tablename__ = 'language'

    language_id = Column(TINYINT(3), primary_key=True)
    name = Column(CHAR(20), nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    film = relationship('Film', foreign_keys='[Film.language_id]', back_populates='language')
    film_ = relationship('Film', foreign_keys='[Film.original_language_id]', back_populates='original_language')


t_nicer_but_slower_film_list = Table(
    'nicer_but_slower_film_list', metadata,
    Column('FID', SMALLINT(5), server_default=text("'0'")),
    Column('title', String(128)),
    Column('description', Text),
    Column('category', String(25)),
    Column('price', DECIMAL(4, 2), server_default=text("'4.99'")),
    Column('length', SMALLINT(5)),
    Column('rating', Enum('G', 'PG', 'PG-13', 'R', 'NC-17'), server_default=text("'G'")),
    Column('actors', MEDIUMTEXT)
)


t_sales_by_film_category = Table(
    'sales_by_film_category', metadata,
    Column('category', String(25)),
    Column('total_sales', DECIMAL(27, 2))
)


t_sales_by_store = Table(
    'sales_by_store', metadata,
    Column('store', String(101)),
    Column('manager', String(91)),
    Column('total_sales', DECIMAL(27, 2))
)


class Staff(db.Model):
    __tablename__ = 'staff'
    __table_args__ = (
        ForeignKeyConstraint(['address_id'], ['address.address_id'], onupdate='CASCADE', name='fk_staff_address'),
        ForeignKeyConstraint(['store_id'], ['store.store_id'], onupdate='CASCADE', name='fk_staff_store')
    )

    staff_id = Column(TINYINT(3), primary_key=True)
    first_name = Column(String(45), nullable=False)
    last_name = Column(String(45), nullable=False)
    address_id = Column(SMALLINT(5), nullable=False, index=True)
    store_id = Column(TINYINT(3), nullable=False, index=True)
    active = Column(TINYINT(1), nullable=False, server_default=text('1'))
    username = Column(String(16), nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))
    picture = Column(LargeBinary)
    email = Column(String(50))
    password = Column(VARCHAR(40))

    address = relationship('Address', back_populates='staff')
    store = relationship('Store', foreign_keys=[store_id], back_populates='staff')
    store_ = relationship('Store', foreign_keys='[Store.manager_staff_id]', back_populates='manager_staff')
    rental = relationship('Rental', back_populates='staff')
    payment = relationship('Payment', back_populates='staff')


t_staff_list = Table(
    'staff_list', metadata,
    Column('ID', TINYINT(3), server_default=text("'0'")),
    Column('name', String(91)),
    Column('address', String(50)),
    Column('zip code', String(10)),
    Column('phone', String(20)),
    Column('city', String(50)),
    Column('country', String(50)),
    Column('SID', TINYINT(3))
)


class Store(db.Model):
    __tablename__ = 'store'
    __table_args__ = (
        ForeignKeyConstraint(['address_id'], ['address.address_id'], onupdate='CASCADE', name='fk_store_address'),
        ForeignKeyConstraint(['manager_staff_id'], ['staff.staff_id'], onupdate='CASCADE', name='fk_store_staff')
    )

    store_id = Column(TINYINT(3), primary_key=True)
    manager_staff_id = Column(TINYINT(3), nullable=False, unique=True)
    address_id = Column(SMALLINT(5), nullable=False, index=True)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    staff = relationship('Staff', foreign_keys='[Staff.store_id]', back_populates='store')
    address = relationship('Address', back_populates='store')
    manager_staff = relationship('Staff', foreign_keys=[manager_staff_id], back_populates='store_')
    inventory = relationship('Inventory', back_populates='store')
    customer = relationship('Customer', back_populates='store')


class City(db.Model):
    __tablename__ = 'city'
    __table_args__ = (
        ForeignKeyConstraint(['country_id'], ['country.country_id'], onupdate='CASCADE', name='fk_city_country'),
    )

    city_id = Column(SMALLINT(5), primary_key=True)
    city = Column(String(50), nullable=False)
    country_id = Column(SMALLINT(5), nullable=False, index=True)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    country = relationship('Country', back_populates='city')
    address = relationship('Address', back_populates='city')


class Film(db.Model):
    __tablename__ = 'film'
    __table_args__ = (
        ForeignKeyConstraint(['language_id'], ['language.language_id'], onupdate='CASCADE', name='fk_film_language'),
        ForeignKeyConstraint(['original_language_id'], ['language.language_id'], onupdate='CASCADE', name='fk_film_language_original')
    )

    film_id = Column(SMALLINT(5), primary_key=True)
    title = Column(String(128), nullable=False, index=True)
    language_id = Column(TINYINT(3), nullable=False, index=True)
    rental_duration = Column(TINYINT(3), nullable=False, server_default=text('3'))
    rental_rate = Column(DECIMAL(4, 2), nullable=False, server_default=text('4.99'))
    replacement_cost = Column(DECIMAL(5, 2), nullable=False, server_default=text('19.99'))
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))
    description = Column(Text)
    release_year = Column(YEAR(4))
    original_language_id = Column(TINYINT(3), index=True)
    length = Column(SMALLINT(5))
    rating = Column(Enum('G', 'PG', 'PG-13', 'R', 'NC-17'), server_default=text("'G'"))
    special_features = Column(SET('Trailers', 'Commentaries', 'Deleted Scenes', 'Behind the Scenes'))

    language = relationship('Language', foreign_keys=[language_id], back_populates='film')
    original_language = relationship('Language', foreign_keys=[original_language_id], back_populates='film_')
    film_actor = relationship('FilmActor', back_populates='film')
    film_category = relationship('FilmCategory', back_populates='film')
    inventory = relationship('Inventory', back_populates='film')


class Address(db.Model):
    __tablename__ = 'address'
    __table_args__ = (
        ForeignKeyConstraint(['city_id'], ['city.city_id'], onupdate='CASCADE', name='fk_address_city'),
    )

    address_id = Column(SMALLINT(5), primary_key=True)
    address = Column(String(50), nullable=False)
    district = Column(String(20), nullable=False)
    city_id = Column(SMALLINT(5), nullable=False, index=True)
    phone = Column(String(20), nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))
    address2 = Column(String(50))
    postal_code = Column(String(10))

    staff = relationship('Staff', back_populates='address')
    store = relationship('Store', back_populates='address')
    city = relationship('City', back_populates='address')
    customer = relationship('Customer', back_populates='address')


class FilmActor(db.Model):
    __tablename__ = 'film_actor'
    __table_args__ = (
        ForeignKeyConstraint(['actor_id'], ['actor.actor_id'], onupdate='CASCADE', name='fk_film_actor_actor'),
        ForeignKeyConstraint(['film_id'], ['film.film_id'], onupdate='CASCADE', name='fk_film_actor_film')
    )

    actor_id = Column(SMALLINT(5), primary_key=True, nullable=False)
    film_id = Column(SMALLINT(5), primary_key=True, nullable=False, index=True)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    actor = relationship('Actor', back_populates='film_actor')
    film = relationship('Film', back_populates='film_actor')


class FilmCategory(db.Model):
    __tablename__ = 'film_category'
    __table_args__ = (
        ForeignKeyConstraint(['category_id'], ['category.category_id'], onupdate='CASCADE', name='fk_film_category_category'),
        ForeignKeyConstraint(['film_id'], ['film.film_id'], onupdate='CASCADE', name='fk_film_category_film')
    )

    film_id = Column(SMALLINT(5), primary_key=True, nullable=False)
    category_id = Column(TINYINT(3), primary_key=True, nullable=False, index=True)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    category = relationship('Category', back_populates='film_category')
    film = relationship('Film', back_populates='film_category')


class Inventory(db.Model):
    __tablename__ = 'inventory'
    __table_args__ = (
        ForeignKeyConstraint(['film_id'], ['film.film_id'], onupdate='CASCADE', name='fk_inventory_film'),
        ForeignKeyConstraint(['store_id'], ['store.store_id'], onupdate='CASCADE', name='fk_inventory_store'),
        Index('idx_store_id_film_id', 'store_id', 'film_id')
    )

    inventory_id = Column(MEDIUMINT(8), primary_key=True)
    film_id = Column(SMALLINT(5), nullable=False, index=True)
    store_id = Column(TINYINT(3), nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))

    film = relationship('Film', back_populates='inventory')
    store = relationship('Store', back_populates='inventory')
    rental = relationship('Rental', back_populates='inventory')


class Customer(db.Model):
    __tablename__ = 'customer'
    __table_args__ = (
        ForeignKeyConstraint(['address_id'], ['address.address_id'], onupdate='CASCADE', name='fk_customer_address'),
        ForeignKeyConstraint(['store_id'], ['store.store_id'], onupdate='CASCADE', name='fk_customer_store')
    )

    customer_id = Column(SMALLINT(5), primary_key=True)
    store_id = Column(TINYINT(3), nullable=False, index=True)
    first_name = Column(String(45), nullable=False)
    last_name = Column(String(45), nullable=False, index=True)
    address_id = Column(SMALLINT(5), nullable=False, index=True)
    active = Column(TINYINT(1), nullable=False, server_default=text('1'))
    create_date = Column(DateTime, nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))
    email = Column(String(50))

    address = relationship('Address', back_populates='customer')
    store = relationship('Store', back_populates='customer')
    rental = relationship('Rental', back_populates='customer')
    payment = relationship('Payment', back_populates='customer')


class Rental(db.Model):
    __tablename__ = 'rental'
    __table_args__ = (
        ForeignKeyConstraint(['customer_id'], ['customer.customer_id'], onupdate='CASCADE', name='fk_rental_customer'),
        ForeignKeyConstraint(['inventory_id'], ['inventory.inventory_id'], onupdate='CASCADE', name='fk_rental_inventory'),
        ForeignKeyConstraint(['staff_id'], ['staff.staff_id'], onupdate='CASCADE', name='fk_rental_staff'),
        Index('rental_date', 'rental_date', 'inventory_id', 'customer_id', unique=True)
    )

    rental_id = Column(INTEGER(11), primary_key=True)
    rental_date = Column(DateTime, nullable=False)
    inventory_id = Column(MEDIUMINT(8), nullable=False, index=True)
    customer_id = Column(SMALLINT(5), nullable=False, index=True)
    staff_id = Column(TINYINT(3), nullable=False, index=True)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))
    return_date = Column(DateTime)

    customer = relationship('Customer', back_populates='rental')
    inventory = relationship('Inventory', back_populates='rental')
    staff = relationship('Staff', back_populates='rental')
    payment = relationship('Payment', back_populates='rental')


class Payment(db.Model):
    __tablename__ = 'payment'
    __table_args__ = (
        ForeignKeyConstraint(['customer_id'], ['customer.customer_id'], onupdate='CASCADE', name='fk_payment_customer'),
        ForeignKeyConstraint(['rental_id'], ['rental.rental_id'], ondelete='SET NULL', onupdate='CASCADE', name='fk_payment_rental'),
        ForeignKeyConstraint(['staff_id'], ['staff.staff_id'], onupdate='CASCADE', name='fk_payment_staff')
    )

    payment_id = Column(SMALLINT(5), primary_key=True)
    customer_id = Column(SMALLINT(5), nullable=False, index=True)
    staff_id = Column(TINYINT(3), nullable=False, index=True)
    amount = Column(DECIMAL(5, 2), nullable=False)
    payment_date = Column(DateTime, nullable=False)
    last_update = Column(TIMESTAMP, nullable=False, server_default=text('current_timestamp() ON UPDATE current_timestamp()'))
    rental_id = Column(INTEGER(11), index=True)

    customer = relationship('Customer', back_populates='payment')
    rental = relationship('Rental', back_populates='payment')
    staff = relationship('Staff', back_populates='payment')
