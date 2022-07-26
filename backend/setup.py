from setuptools import find_packages, setup

setup(
    name="src",
    version="1.0",
    packages=find_packages(exclude=["tests.*", "tests"]),
    include_package_data=True,
    package_data={},
    requires=['pandas'],
    install_requires=[
        'pandas'
    ]
)