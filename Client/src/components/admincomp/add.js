import React from 'react'
import './admincomp.css'

function Add() {
  return (
    <div>
        <table className='table'>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Book name</th>
                        <th>Genre</th>
                        <th>Author Name</th>
                        <th>Applied Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Priyansh</td>
                        <td>DSA</td>
                        <td>Competitve</td>
                        <td>Aryan Solnaki</td>
                        <td>2023-06-15</td>
                    </tr>
                </tbody>
            </table>
    </div>
  )
}

export default Add