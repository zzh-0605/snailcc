import Head from "next/head";
import Date from "../../components/Date";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { Container, Typography, styled } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "@/utils/post";
import { Layout } from "@/layouts";
import { Page } from "@/components/Page";

interface IPostProps {
  postData: {
    id: string;
    title: string;
    date: string;
    content: MDXRemoteProps;
  };
}

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

const StyledContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2),

  "& p": {
    marginBottom: theme.spacing(2),
    textIndent: "2em",
  },
}));

export default function Post({ postData }: IPostProps) {
  return (
    <Page title="日志">
      <RootStyle>
        <Container sx={{ mt: 2 }}>
          <Typography variant="h6">{postData.title}</Typography>
          <Typography variant="caption">{postData.date}</Typography>

          <StyledContainer>
            <MDXRemote {...postData.content} />
          </StyledContainer>
        </Container>
      </RootStyle>
    </Page>
  );
}

Post.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // 获取所有文章id，即所有路由
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // 获取文章内容
  const postData = await getPostData(params!.id as string);

  return {
    props: {
      postData,
    },
  };
};
