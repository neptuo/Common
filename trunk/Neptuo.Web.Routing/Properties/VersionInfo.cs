﻿using System;

namespace Neptuo.Web.Routing
{
    public static class VersionInfo
    {
        internal const string Version = "1.2.1";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
