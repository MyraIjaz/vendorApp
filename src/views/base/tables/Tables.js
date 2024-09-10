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
  CFormInput,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle
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

  // States for global, column-wise filters, pagination, and number of rows
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

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

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

  // Handle page change
  const handleNextPage = () => {
    if (currentPage * rowsPerPage < filteredVendors.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Handle rows per page change
  const handleRowsPerPageChange = (rows) => {
    setRowsPerPage(rows)
    setCurrentPage(1) // Reset to first page when changing rows per page
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

  // Get paginated rows
  const paginatedVendors = filteredVendors.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  )

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
                <CTableHeaderCell scope="col">Company ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vendor ID</CTableHeaderCell>
                <CTableHeaderCell scope="col">Vendor Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Procurement Category</CTableHeaderCell>
                <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Street Address</CTableHeaderCell>
                <CTableHeaderCell scope="col">City</CTableHeaderCell>
                <CTableHeaderCell scope="col">State</CTableHeaderCell>
              </CTableRow>
              </CTableHead>
              <CTableBody>
                {paginatedVendors.map((vendor, index) => (
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

            {/* Pagination Controls */}
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <CButton
                  disabled={currentPage === 1}
                  onClick={handlePreviousPage}
                >
                  Previous
                </CButton>
                <CButton
                  className="ms-3"
                  disabled={currentPage * rowsPerPage >= filteredVendors.length}
                  onClick={handleNextPage}
                >
                  Next
                </CButton>
              </div>
              <div>
                <CDropdown>
                  <CDropdownToggle color="primary">
                    Rows per page: {rowsPerPage}
                  </CDropdownToggle>
                  <CDropdownMenu>
                    {[10, 20, 30, 40, 50].map((rows) => (
                      <CDropdownItem key={rows} onClick={() => handleRowsPerPageChange(rows)}>
                        {rows}
                      </CDropdownItem>
                    ))}
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
