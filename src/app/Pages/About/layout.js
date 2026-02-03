import Footer from '@/app/Components/footer'
export default function RootLayout({children}){
    return(
        <>
        {children}
        <Footer/>
        </>
    )
}