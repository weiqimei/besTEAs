"""empty message

Revision ID: 84079e5cc199
Revises: 
Create Date: 2022-08-10 02:44:22.600847

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '84079e5cc199'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=25), nullable=False),
    sa.Column('last_name', sa.String(length=25), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('boba_shops',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=25), nullable=False),
    sa.Column('image', sa.Text(), nullable=True),
    sa.Column('address', sa.String(length=100), nullable=False),
    sa.Column('city', sa.String(length=25), nullable=False),
    sa.Column('state', sa.String(length=25), nullable=False),
    sa.Column('zipcode', sa.String(length=25), nullable=False),
    sa.Column('phone', sa.String(length=25), nullable=False),
    sa.Column('hours', sa.String(length=50), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('boba_shop_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(), nullable=False),
    sa.Column('picture', sa.Text(), nullable=False),
    sa.Column('date', sa.TIMESTAMP(), nullable=False),
    sa.ForeignKeyConstraint(['boba_shop_id'], ['boba_shops.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('boba_shops')
    op.drop_table('users')
    # ### end Alembic commands ###
