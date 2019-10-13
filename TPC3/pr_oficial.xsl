<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="pr.html">
            <html>
                <style>
                    td{
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
                            <td>
                                <h2>Workteam</h2>
                                <ol>
                                    <xsl:apply-templates select="pr/workteam"/>
                                </ol>
                            </td>
                            <td>
                                <h2>Supervisor</h2>
                                <p><b>Name: </b> <xsl:value-of select="pr/meta/supervisor/name"/></p>
                                <p><b>Email: </b> <xsl:value-of select="pr/meta/supervisor/email"/></p>
                                <p><b>Homepage: </b> <a href="http://{pr/meta/supervisor/homepage}"><xsl:value-of select="pr/meta/supervisor/homepage"/></a></p>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <h1>Deliverables</h1>
                                <ol>
                                    <xsl:apply-templates mode="deliverable" select="pr/deliverables"/>
                                </ol>
                            </td>
                            <td>
                                
                                <p><b>Begin Date: </b> <xsl:value-of select="pr/meta/bdate"/></p>
                                <p><b>End Date: </b> <xsl:value-of select="pr/meta/edate"/></p>
                            </td>
                            
                        </tr>
                    </table>
                    <h1>Abstract</h1>
                    <pre><xsl:value-of select="pr/abstract"/></pre>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template> 
    
    <xsl:template match="pr/workteam/member">
        <li>
            <p><b>Name: </b> <xsl:value-of select="name"/></p>
            <p><b>Email: </b> <xsl:value-of select="email"/></p>
            <img src="{photo/@path}"/>
        </li>
    </xsl:template>
    
    <xsl:template match="pr/deliverables/deliverable" mode="deliverable">
        <li>
            <a href="{@path}"><xsl:value-of select="@path"/></a>
        </li>
    </xsl:template>
</xsl:stylesheet>