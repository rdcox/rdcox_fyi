import { Page, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    resume: {
        display: 'flex',
        justifyContent: 'center'
    },
    header: {
      textAlign: 'center'
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    contactInfoItem: {
      padding: '0.5em',
      fontSize: 'small',
    },
    aboutMe: {
      marginBottom: '1em'
    },
    experience: {
      display: 'flex',
      flexDirection: 'column'
    },
    companyContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    companyName: {
      width: 'auto',
      fontSize: 'large',
      fontWeight: 'bold'
    },
    location: {
      fontSize: 'smaller',
      display: 'flex',
      alignItems: 'flex-end'
    },
    jobContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '1em',
      fontStyle: 'oblique'
    },
    dateRange: {
      fontSize: 'smaller'
    }
  });

  export default async function ResumeDoc() {
    return (
        <Document>
            <Page size="A4" style={styles.resume}>
                <View>
                
                </View>
            </Page>
        </Document>
    )
  }

