import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'
import { UserActivityType } from '@/models/activity'
import EmptyActivity from './EmptyActivity'
import EmptyAvatar from '../ui/images/Avatar'

interface ActivitiesTableProps {
  activities: UserActivityType[]
}
const ActivitiesTable: FC<ActivitiesTableProps> = ({ activities = [] }) => {

  if (activities?.length === 0)
    return <EmptyActivity />

  return (
    <Box sx={{
      padding: "32px 0",
      display: 'flex',
      flexDirection: "column",
      gap: "16px",
      width: "100%",
    }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ height: "44px" }}>
            <TableRow>
              {["User", "Date/Time", "Action", "Component Type", "New Value", "Location of Action"].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#667085",
                    borderBottom: "1px solid #EAECF0",
                    padding: 0,
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow
                key={activity.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "secondary.main" : "#FFFFFF",
                  borderBottom: "1px solid #EAECF0",
                  height: "72px",
                }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "500",
                    color: "#101828",
                    padding: "0 16px",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <EmptyAvatar width={40} height={40} />
                    <Box>{activity.user.firstName} {activity.user.lastName}</Box>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#000000",
                  }}
                >{activity.createdAt}</TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#000000",
                  }}
                >{activity.action}</TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#000000",
                  }}
                >{activity.componentType}</TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#000000",
                  }}
                >{activity.newValue}</TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    color: "#000000",
                  }}
                >{activity.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default ActivitiesTable
