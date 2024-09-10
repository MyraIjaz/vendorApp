import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSearch
} from '@coreui/icons'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CInputGroup,
  CInputGroupText,
  CFormInput
} from '@coreui/react'

const Tables = () => {
  // Sample vendor data
  const vendors = [
    { companyId: 1, vendorId: 'V001', vendorName: 'Acme Corp', category: 'Office Supplies', phone: '(555) 123-4567', email: 'acme@example.com', address: '123 Main St', city: 'New York', state: 'NY' },
    { companyId: 2, vendorId: 'V002', vendorName: 'Global Tech', category: 'IT Services', phone: '(555) 234-5678', email: 'global.tech@example.com', address: '456 Oak St', city: 'San Francisco', state: 'CA' },
    { companyId: 3, vendorId: 'V003', vendorName: 'Green Earth', category: 'Environmental', phone: '(555) 345-6789', email: 'green.earth@example.com', address: '789 Pine St', city: 'Denver', state: 'CO' },
    { companyId: 4, vendorId: 'V004', vendorName: 'Speedy Logistics', category: 'Logistics', phone: '(555) 456-7890', email: 'speedy@example.com', address: '321 Cedar Ave', city: 'Houston', state: 'TX' },
    { companyId: 5, vendorId: 'V005', vendorName: 'Solar Innovations', category: 'Renewable Energy', phone: '(555) 567-8901', email: 'solar.innov@example.com', address: '654 Spruce St', city: 'Austin', state: 'TX' },
    { companyId: 6, vendorId: 'V006', vendorName: 'Blue Ocean', category: 'Marine Equipment', phone: '(555) 678-9012', email: 'blue.ocean@example.com', address: '987 Birch St', city: 'Miami', state: 'FL' },
    { companyId: 7, vendorId: 'V007', vendorName: 'Tech Titans', category: 'Software', phone: '(555) 789-0123', email: 'tech.titans@example.com', address: '741 Maple St', city: 'Seattle', state: 'WA' },
    { companyId: 8, vendorId: 'V008', vendorName: 'Future Energy', category: 'Energy Solutions', phone: '(555) 890-1234', email: 'future.energy@example.com', address: '852 Willow St', city: 'Chicago', state: 'IL' },
    { companyId: 9, vendorId: 'V009', vendorName: 'Mountain Industries', category: 'Construction', phone: '(555) 901-2345', email: 'mountain.ind@example.com', address: '963 Fir St', city: 'Phoenix', state: 'AZ' },
    { companyId: 10, vendorId: 'V010', vendorName: 'Streamline Logistics', category: 'Transportation', phone: '(555) 012-3456', email: 'streamline@example.com', address: '174 Elm St', city: 'Atlanta', state: 'GA' },
  ]

  // States for global and column-wise filters
  const [globalFilter, setGlobalFilter] = useState('')
  const [filters, setFilters] = useState({
    companyId: '',
    vendorId: '',
    vendorName: '',
    category: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
  })

  // Handle global filter input change
  const handleGlobalFilterChange = (e) => {
    setGlobalFilter(e.target.value)
  }

  // Handle column-wise filter input change
  const handleColumnFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    })
  }

  // Filter vendors based on global and column-wise filters
  const filteredVendors = vendors.filter((vendor) => {
    return (
      (globalFilter === '' || Object.values(vendor).some((value) => value.toString().toLowerCase().includes(globalFilter.toLowerCase()))) &&
      (filters.companyId === '' || vendor.companyId.toString().includes(filters.companyId)) &&
      (filters.vendorId === '' || vendor.vendorId.toLowerCase().includes(filters.vendorId.toLowerCase())) &&
      (filters.vendorName === '' || vendor.vendorName.toLowerCase().includes(filters.vendorName.toLowerCase())) &&
      (filters.category === '' || vendor.category.toLowerCase().includes(filters.category.toLowerCase())) &&
      (filters.phone === '' || vendor.phone.toLowerCase().includes(filters.phone.toLowerCase())) &&
      (filters.email === '' || vendor.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.address === '' || vendor.address.toLowerCase().includes(filters.address.toLowerCase())) &&
      (filters.city === '' || vendor.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.state === '' || vendor.state.toLowerCase().includes(filters.state.toLowerCase()))
    )
  })

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Vendors</strong> <small>List of Vendors From D365</small>
          </CCardHeader>
          <CCardBody>
            {/* Global Filter with Icon */}
            <CInputGroup className="mb-3" style={{ maxWidth: '300px' }}>
              <CInputGroupText>
                <CIcon icon={cilSearch} />
              </CInputGroupText>
              <CFormInput
                type="text"
                placeholder="Filter"
                value={globalFilter}
                onChange={handleGlobalFilterChange}
              />
            </CInputGroup>
            {/* Column Filters */}
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="companyId"
                      value={filters.companyId}
                      onChange={handleColumnFilterChange}
                      placeholder="Company ID"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="vendorId"
                      value={filters.vendorId}
                      onChange={handleColumnFilterChange}
                      placeholder="Vendor ID"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="vendorName"
                      value={filters.vendorName}
                      onChange={handleColumnFilterChange}
                      placeholder="Vendor Name"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="category"
                      value={filters.category}
                      onChange={handleColumnFilterChange}
                      placeholder="Category"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="phone"
                      value={filters.phone}
                      onChange={handleColumnFilterChange}
                      placeholder="Phone"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="email"
                      value={filters.email}
                      onChange={handleColumnFilterChange}
                      placeholder="Email"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="address"
                      value={filters.address}
                      onChange={handleColumnFilterChange}
                      placeholder="Address"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="city"
                      value={filters.city}
                      onChange={handleColumnFilterChange}
                      placeholder="City"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="col">
                    {/* <input
                      type="text"
                      name="state"
                      value={filters.state}
                      onChange={handleColumnFilterChange}
                      placeholder="State"
                      className="form-control"
                    /> */}
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredVendors.map((vendor, index) => (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{vendor.companyId}</CTableHeaderCell>
                    <CTableDataCell>{vendor.vendorId}</CTableDataCell>
                    <CTableDataCell>{vendor.vendorName}</CTableDataCell>
                    <CTableDataCell>{vendor.category}</CTableDataCell>
                    <CTableDataCell>{vendor.phone}</CTableDataCell>
                    <CTableDataCell>{vendor.email}</CTableDataCell>
                    <CTableDataCell>{vendor.address}</CTableDataCell>
                    <CTableDataCell>{vendor.city}</CTableDataCell>
                    <CTableDataCell>{vendor.state}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
