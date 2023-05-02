import { Card, CardMedia } from "@mui/material";
import { Box, Grid, IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";

export function ImageGallery({ images = [], saveImage, disabled }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        m: 2,
      }}
    >
      <Card sx={{ maxWidth: 450, m: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 150,
            width: 150,
            backgroundColor: "#ddd",
          }}
        >
          <IconButton onClick={saveImage} disabled={disabled}>
            <Add sx={{ fontSize: "60px", color: "#aaa" }} />
          </IconButton>
        </Box>
      </Card>

      {images.map((item, e) => (
        <Card sx={{ maxWidth: 450, m: 1 }} key={item}>
          <CardMedia sx={{ height: 150, width: 150 }} image={item} title={e} />
        </Card>
      ))}
    </Box>
  );
}
