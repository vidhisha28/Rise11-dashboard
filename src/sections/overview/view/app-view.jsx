import React from 'react';
import { faker } from '@faker-js/faker';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { account } from 'src/_mock/account';
import AppNewsUpdate from '../app-news-update';
import AppVisitors from '../app-visitors';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentSubject from '../app-current-subject';
import StudentQueries from '../app-student-queries';


export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
      <div>
  Hello, <Typography variant="h5" component="span" style={{ display: 'inline' }}>{account.displayName}</Typography>👋
</div>

        {/* Hello, <Typography variant="h5">{account.displayName}</Typography>👋 */}
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Impressions"
            total={832}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total audience"
            total={832}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Engagements"
            total={832}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Engaged audience"
            total={832}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Revenue"
            subheader="(+0.3%)"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Course Visit',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Course Sale',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'This Month',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        <AppVisitors
            title="Visitors"
            subheader="(-0.3%) "
            chart={{
              series: [
                { label: 'Mon', value: 400 },
                { label: 'Tue', value: 320 },
                { label: 'Wed', value: 290 },
                { label: 'Thurs', value: 320 },
                { label: 'Fri', value: 290 },
                { label: 'Sat', value: 250 },
              
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
        <AppCurrentVisits
            title="Sales"
            chart={{
              series: [
                { label: 'Current Week', value: 2000 },
                { label: 'Last Week', value: 1500 },
                // { label: 'Europe', value: 1443 },
                // { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Weekly Sales Stats"
            chart={{
              categories: ['Adobe XD 01', 'Data Science','UI/UX Designer'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <StudentQueries
            data={[
              { id: '1', description: 'Machine Learning BootCamp' },
              { id: '2', description: 'Python & R in Data Science' },
              { id: '3', description: 'Data Science' },
              { id: '4', description: 'Analyst Bootcamp 2020' },
            ]}
            
          />
        </Grid>

        <Grid xs={12} md={6} lg={10}>
          <AppNewsUpdate
            title="Course Status"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        
      </Grid> 
    </Container>
  );
}
