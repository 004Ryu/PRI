<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="pr.html">
            <html>
                <style>
                    td.main{
                        border: 2px solid black;
                        width: 1500px;
                        height: 200px;
                    }
                </style>
                <head>
                    <title>Project Record</title>
                    <meta charset="UTF-8"/>
                </head>
                <body>
                    <h1><xsl:value-of select="pr/meta/title"/></h1>
                    <h2><xsl:value-of select="pr/meta/subtitle"/></h2>
                    <table>
                        <thead><xsl:value-of select="pr/meta/keyname"/></thead>
                        <tr>                          
                            <td class="main">
                                <h2>Workteam</h2>
                                <l style="list-style-type:none;">
                                    <xsl:apply-templates select="pr/workteam"/>
                                </l>
                            </td>
                            <td class="main">
                                <h2>Supervisor</h2>
                                <p><b>Name: </b> <xsl:value-of select="pr/meta/supervisor/name"/></p>
                                <p><b>Email: </b> <xsl:value-of select="pr/meta/supervisor/email"/></p>
                                <p><b>Homepage: </b> <a href="http://{pr/meta/supervisor/homepage}"><xsl:value-of select="pr/meta/supervisor/homepage"/></a></p>
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="main">
                                <h2>Deliverables</h2>
                                <ul>
                                    <xsl:apply-templates mode="deliverable" select="pr/deliverables"/>
                                </ul>
                            </td>
                            <td class="main">
                                
                                <p><b>Begin Date: </b> <xsl:value-of select="pr/meta/bdate"/></p>
                                <p><b>End Date: </b> <xsl:value-of select="pr/meta/edate"/></p>
                            </td>
                            
                        </tr>
                    </table>
                    <h1>Abstract</h1>
                    <div><xsl:apply-templates select="pr/abstract"/></div>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template> 
    
    <xsl:template match="member">
        <li>
            <table>
                <tr>
                    <td>
                        <h3><xsl:value-of select="identifier"/></h3>
                        <p><b>Name: </b> <xsl:value-of select="name"/></p>
                        <p><b>Email: </b> <xsl:value-of select="email"/></p>
                    </td>
                    <td>
                        <img src="memberPhotos/{photo/@path}" height="140px"/>                        
                    </td>
                </tr>
            </table>
        </li>
    </xsl:template>
    
    <xsl:template match="deliverable" mode="deliverable">
        <li>
            <a href="{@path}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
    
    <xsl:template match="abstract">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>                
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
    
    <xsl:template match="u">
        <u><xsl:apply-templates/></u>
    </xsl:template>
</xsl:stylesheet>