﻿using System;

namespace Neptuo.Web.Services
{
    public static class VersionInfo
    {
        internal const string Version = "1.0.0";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
