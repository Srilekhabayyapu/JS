import pandas as pd

# Load messy raw data
patients = pd.read_csv('data_raw/patients_raw.csv')
doctors = pd.read_csv('data_raw/doctors_raw.csv')
appointments = pd.read_csv('data_raw/appointments_raw.csv')

# Example cleaning steps
patients['name'] = patients['name'].str.title()
patients['age'] = patients['age'].fillna(patients['age'].median())
appointments['bill_amount'] = appointments['bill_amount'].replace('$','', regex=True).astype(float)

# Save clean data
patients.to_csv('data_clean/patients_clean.csv', index=False)
doctors.to_csv('data_clean/doctors_clean.csv', index=False)
appointments.to_csv('data_clean/appointments_clean.csv', index=False)