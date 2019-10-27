<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:template match="/doc">
        <html>
            <head>
                <title>Arquivo Sonoro EVO</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1 style="text-align:center"><xsl:value-of select="tit"/></h1>
                <p><b>Autor:</b> <xsl:value-of select="musico"/></p>
                <p><b>Provincia:</b>  <xsl:value-of select="prov"/></p>
                <p><b>Local:</b>  <xsl:value-of select="local"/></p>
                <p><b>Duração:</b>  <xsl:value-of select="duracao"/></p>
                <a href="{file}"><h>MP3</h></a>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>