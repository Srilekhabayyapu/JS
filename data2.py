import pandas as pd
import mysql.connector
conn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Ramya2003$",
    database="hospital_analysis",
)
cursor=conn.cursor()
patients = pd.read_csv('data_clean/patients_clean.csv')
appointments = pd.read_csv('data_clean/appointments_clean.csv')
doctors = pd.read_csv('data_clean/doctors_clean.csv')
for _, row in patients.iterrows():
    cursor.execute(
        "INSERT INTO patients VALUES (%s,%s,%s,%s,%s)",
        tuple(row)
    )
conn.commit()
conn.close()