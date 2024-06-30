import React, { forwardRef } from 'react'
import Image from 'next/image'

const EmailSignature = forwardRef((props,ref) => {
  return (
    <div ref={ref}>
        <table style={{ width: '100%', maxWidth: '600px', fontFamily: 'Arial, sans-serif', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#ffffff' }}>
            <tbody>
                <tr>
                    <td style={{ padding: '20px' }}>
                        <table style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '0 10px 10px 0' }}>
                                        <Image 
                                            src="https://via.placeholder.com/150"
                                            width={150}
                                            height={150}
                                            alt="Picture of the author"
                                        />
                                    </td>
                                    <td style={{ padding: '0 10px' }}>
                                        <table style={{ width: '100%' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>John Doe</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '1rem', fontWeight: '500', color: '#6b7280' }}>Senior Developer</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding: '10px 0', fontSize: '0.875rem', color: '#374151' }}>
                                                        <a href="mailto:johndoe@example.com" style={{ color: '#1d4ed8', textDecoration: 'none' }}>johndoe@example.com</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontSize: '0.875rem', color: '#374151' }}>
                                                        <a href="tel:+1234567890" style={{ color: '#1d4ed8', textDecoration: 'none' }}>+1 (234) 567-890</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={{ width: '100%', borderTop: '1px solid #e5e7eb', paddingTop: '10px' }}>
                            <tbody>
                                <tr>
                                    <td style={{ fontSize: '0.875rem', color: '#374151' }}>Company: <span style={{ fontWeight: '500' }}>Example Corp</span></td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: '0.875rem', color: '#374151' }}>Website: <a href="https://www.example.com" style={{ color: '#1d4ed8', textDecoration: 'none' }}>www.example.com</a></td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: '0.875rem', color: '#374151' }}>Address: <span style={{ fontWeight: '500' }}>123 Main Street, City, Country</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
})

export default EmailSignature