def get_personal_info(table_name):
    return \
        """ 
            CREATE TABLE {table_name} (
                Email VARCHAR(255) NOT NULL,
                First_Name CHAR(25) NOT NULL,
                Last_Name CHAR(25),
                Score INT
            ); 
        """.format(table_name=table_name)
