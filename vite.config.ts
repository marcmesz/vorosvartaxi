import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import fs from "fs-extra"
import path from "path"
import cheerio from "cheerio"

function organizeBuild() {
  return {
    name: "organize-build",
    closeBundle: () => {
      const buildDir = path.resolve(__dirname, "build")
      const staticDir = path.join(buildDir, "static")
      const assetsDir = path.join(staticDir, "assets")
      const imagesDir = path.join(staticDir, "images")
      const publicDir = path.resolve(__dirname, "public")

      // Ensure directories exist
      fs.ensureDirSync(staticDir)
      fs.ensureDirSync(assetsDir)
      fs.ensureDirSync(imagesDir)

      // Move public folder files (e.g., favicon) to the images directory
      if (fs.existsSync(publicDir)) {
        fs.readdirSync(publicDir).forEach((file) => {
          const srcPath = path.join(publicDir, file)
          const destPath = path.join(imagesDir, file)
          fs.copySync(srcPath, destPath)

          if (!file.endsWith(".html")) {
            const filePath = path.join(buildDir, file)
            fs.removeSync(filePath)
          }
        })
      }

      // Move hashed asset files to the assets directory
      fs.readdirSync(buildDir).forEach((file) => {
        const filePath = path.join(buildDir, file)
        if (
          file.endsWith(".js") ||
          file.endsWith(".css") ||
          file.endsWith(".map")
        ) {
          const destPath = path.join(assetsDir, file)
          fs.moveSync(filePath, destPath)
        }
      })

      // Clean up any empty directories in the root of the build directory
      fs.readdirSync(buildDir).forEach((dir) => {
        const dirPath = path.join(buildDir, dir)
        if (
          fs.lstatSync(dirPath).isDirectory() &&
          fs.readdirSync(dirPath).length === 0
        ) {
          fs.removeSync(dirPath)
        }
      })

      // Update index.html to use the correct favicon path
      const indexPath = path.join(buildDir, "index.html")
      if (fs.existsSync(indexPath)) {
        const indexContent = fs.readFileSync(indexPath, "utf-8")
        const $ = cheerio.load(indexContent)

        $('link[rel="icon"]').attr("href", "/static/images/favicon.ico")
        $('link[rel="apple-touch-icon"]').attr(
          "href",
          "/static/images/logo4.png"
        )

        fs.writeFileSync(indexPath, $.html(), "utf-8")
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), svgr(), organizeBuild()],
  build: {
    outDir: "./build",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Configure output file names for hashed assets
        entryFileNames: "static/assets/[name].[hash].js",
        chunkFileNames: "static/assets/[name].[hash].js",
        assetFileNames: "static/assets/[name].[hash].[ext]"
      }
    }
  }
})
