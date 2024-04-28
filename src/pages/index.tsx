import { Page } from "../components/Page";
import { Layout } from "@/layouts";
import { getSortedPostsData } from "@/utils/post";
import {
  Card,
  CardContent,
  Container,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

interface IHomePageProps {
  postList: {
    date: string;
    title: string;
    id: string;
    description?: string;
  }[];
}

export default function HomePage({ postList }: IHomePageProps) {
  return (
    <Page title="首页">
      <RootStyle>
        <Container sx={{ pt: 10 }}>
          {postList?.map(({ id, date, title, description }) => (
            <Card key={id} sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="h6">
                  <Link href={`/posts/${id}`}>{title}</Link>
                </Typography>
                <Typography variant="caption">{date}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Container>
      </RootStyle>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 获取文章列表
  const postList = getSortedPostsData();

  return {
    props: {
      postList,
    },
  };
};

HomePage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
