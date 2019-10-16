<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="Website/index.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1>Arqueossítios do Nordeste Português</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        
        <xsl:apply-templates mode="individual"/>
        
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="arqSitios/{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="Website/arqSitios/{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português : <xsl:value-of select="IDENTI"/></title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1><xsl:value-of select="IDENTI"/></h1>
                    <table>
                        <tr>
                            <xsl:apply-templates select="DESCRI"/>
                        </tr>
                        <tr>
                            <pre><b>Lugar: </b> <xsl:value-of select="LUGAR"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Freguesia: </b> <xsl:value-of select="FREGUE"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Concelho: </b> <xsl:value-of select="CONCEL"/></pre>
                        </tr>
                        <tr>
                            <pre><b>CODADM: </b> <xsl:value-of select="CODADM"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Latitude: </b> <xsl:value-of select="LATITU"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Longitude: </b> <xsl:value-of select="LONGIT"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Altitude: </b> <xsl:value-of select="ALTITU"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Interp: </b> <xsl:value-of select="INTERP"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Deposito: </b> <xsl:value-of select="DEPOSI"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Autor: </b> <xsl:value-of select="AUTOR"/></pre>
                        </tr>
                        <tr>
                            <pre><b>Data: </b> <xsl:value-of select="DATA"/></pre>
                        </tr>
                        <tr>
                            <p><b>Acesso: </b> <xsl:value-of select="ACESSO"/></p>
                        </tr>
                        <tr>
                            <p><b>Quadro: </b> <xsl:value-of select="QUADRO"/></p>
                        </tr>
                        <tr>
                            <xsl:apply-templates select="DESARQ"/>
                        </tr>
                    </table>
                    
                    <h3>Bibliografia:</h3>
                    <ul>
                        <xsl:apply-templates mode="biblio" select="BIBLIO"/>
                    </ul>
                    
                    <hr width="40%"/>
                    <address>
                        <a href="../index.html#{generate-id()}">Voltar</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
        
    </xsl:template>
    
    <xsl:template mode="biblio" match="ARQELEM/BIBLIO">
        <li>
            <xsl:value-of select="."/>
        </li>
    </xsl:template>
    
    <xsl:template match="DESCRI">
        <pre><b>Tipo: </b><xsl:apply-templates/></pre>
        
    </xsl:template>
    
    <xsl:template match="DESARQ">
        <p><b>Desarq: </b><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="LIGA">
        <a href="https://www.google.pt/search?q={.}"><xsl:value-of select="."/></a>
    </xsl:template>
    
</xsl:stylesheet>