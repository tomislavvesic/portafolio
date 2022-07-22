def get_personal_info():
    return  """ 
            CREATE TABLE personal_info (
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                birth_date VARCHAR(255) NOT NULL,
                state VARCHAR(255) NOT NULL,
                city VARCHAR(255) NOT NULL,
                title VARCHAR(255) NOT NULL,
                linkedin VARCHAR(255) NOT NULL,
                github VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL
            ); 
        """

def get_programming_languages():
    return \
        """ 
            CREATE TABLE programming_languages (
                programming_language VARCHAR(255) NOT NULL,
                knowledge INT NOT NULL
            ); 
        """


def get_other_skills():
    return \
        """ 
            CREATE TABLE other_skills (
                other_skills VARCHAR(255) NOT NULL,
                knowledge INT NOT NULL
            ); 
        """
